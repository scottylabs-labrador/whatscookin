import torch
from torchvision.models.detection import fasterrcnn_resnet50_fpn_v2
from torchvision.transforms import functional as F
import cv2
from PIL import Image
import numpy as np

class FridgeDetector:
    def __init__(self, confidence_threshold=0.7):

        self.model = fasterrcnn_resnet50_fpn_v2(pretrained=True)
        self.model.eval()
        self.confidence_threshold = confidence_threshold
        

        self.fridge_items = {
            32: 'bottle',
            47: 'pizza',
            48: 'orange',
            49: 'banana',
            50: 'broccoli',
            51: 'carrot',
            52: 'hot dog',
            53: 'apple',
            72: 'refrigerator',
            86: 'vase',
        }
    
    def preprocess_image(self, image_path):
        """Prepare image for model input."""
        image = Image.open(image_path).convert('RGB')

        image_tensor = F.to_tensor(image)
        return image_tensor

    def detect_items(self, image_path):
        """Detect items in the fridge image."""

        image_tensor = self.preprocess_image(image_path)
        
        with torch.no_grad():
            predictions = self.model([image_tensor])


        boxes = predictions[0]['boxes']
        labels = predictions[0]['labels']
        scores = predictions[0]['scores']
        
        detected_items = []
        
        for box, label, score in zip(boxes, labels, scores):
            if score > self.confidence_threshold and label.item() in self.fridge_items:
                item = {
                    'item': self.fridge_items[label.item()],
                    'confidence': float(score),
                    'bbox': box.tolist()
                }
                detected_items.append(item)
        
        return detected_items

    def visualize_detections(self, image_path, detections):
        """Visualize detected items with bounding boxes."""
        import cv2
        

        image = cv2.imread(image_path)
        

        for detection in detections:
            bbox = detection['bbox']
            item_name = detection['item']
            confidence = detection['confidence']
            

            x1, y1, x2, y2 = map(int, bbox)
            

            cv2.rectangle(image, (x1, y1), (x2, y2), (0, 255, 0), 2)
            

            label = f"{item_name}: {confidence:.2f}"
            cv2.putText(image, label, (x1, y1-10), 
                       cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        
        return image


def main():
    detector = FridgeDetector(confidence_threshold=0.7)
    
    image_path = "fridge_image.jpg"
    
    detections = detector.detect_items(image_path)
    
    print("Detected items:")
    for detection in detections:
        print(f"- {detection['item']} (confidence: {detection['confidence']:.2f})")
    
    output_image = detector.visualize_detections(image_path, detections)
    cv2.imwrite("detected_items.jpg", output_image)

if __name__ == "__main__":
    main()