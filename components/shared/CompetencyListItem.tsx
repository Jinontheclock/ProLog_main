import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CompetencyListItemProps {
    text: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}

export const CompetencyListItem: React.FC<CompetencyListItemProps> = ({
    text,
    checked,
    onCheckedChange,
}) => {
    const [internalChecked, setInternalChecked] = useState(!!checked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handlePress = () => {
        if (isControlled) {
            onCheckedChange?.(!checked);
        } else {
            setInternalChecked((prev) => {
                onCheckedChange?.(!prev);
                return !prev;
            });
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.container,
                isChecked ? styles.checked : styles.unchecked,
            ]}
            onPress={handlePress}
            activeOpacity={0.7}
        >
            <View style={styles.iconBox}>
                {isChecked ? (
                    <MaterialIcons
                        name="check-box"
                        size={32}
                        color={Colors.grey[700]}
                    />
                ) : (
                    <MaterialIcons
                        name="check-box-outline-blank"
                        size={32}
                        color={Colors.black}
                    />
                )}
            </View>
            <Text
                style={[
                    styles.text,
                    isChecked ? styles.checkedText : styles.uncheckedText,
                ]}
            >
                {text}
            </Text>
            <MaterialIcons
                name="chevron-right"
                size={32}
                color={Colors.grey[300]}
                style={styles.chevron}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 20,
        gap: 12,
        marginVertical: 0,
        backgroundColor: Colors.white,
        borderRadius: 8,
        alignSelf: "stretch",
    },
    checked: {},
    unchecked: {},
    iconBox: {
        marginRight: 16,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 2,
    },
    text: {
        flex: 1,
        ...Typography.bigBody,
    },
    checkedText: {
        color: Colors.grey[700],
    },
    uncheckedText: {
        color: Colors.black,
    },
    chevron: {
        marginLeft: 12,
    },
});
