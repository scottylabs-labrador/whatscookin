import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FeedScreen() {
    return (
        <ThemedView style={{flex:1}}>
            <SafeAreaView >
                <ThemedText>Feed</ThemedText>
            </SafeAreaView>
        </ThemedView>
    )
}
