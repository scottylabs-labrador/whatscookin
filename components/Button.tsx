import { StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';

type Props = {
    label: string;
    theme?: string
};

export default function Button({
    label,
    theme
}: Props) {

    if (theme === "primary") {
        return (
            <ThemedView style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={() => alert('You pressed a button.')}
                >
                    <Ionicons
                        name={"images-outline"}
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <ThemedText style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</ThemedText>
                </Pressable>
            </ThemedView>
        );
    }

    return (
        <ThemedView style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <ThemedText style={styles.buttonLabel}>{label}</ThemedText>
            </Pressable>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        // color: '#fff',
        fontSize: 16,
    },
});
