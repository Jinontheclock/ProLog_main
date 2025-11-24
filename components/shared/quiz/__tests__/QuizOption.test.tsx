import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import QuizOption from "../QuizOption";

describe("QuizOption Component", () => {
    it("renders the option label correctly", () => {
        const { getByText } = render(
            <QuizOption
                label="Option 1"
                isSelected={false}
                isCorrect={false}
                isIncorrect={false}
                disabled={false}
                onPress={() => {}}
            />
        );

        expect(getByText("Option 1")).toBeTruthy();
    });

    it("calls onPress when pressed", () => {
        const onPressMock = jest.fn();
        const { getByText } = render(
            <QuizOption
                label="Option 1"
                isSelected={false}
                isCorrect={false}
                isIncorrect={false}
                disabled={false}
                onPress={onPressMock}
            />
        );

        fireEvent.press(getByText("Option 1"));
        expect(onPressMock).toHaveBeenCalled();
    });

    it("applies the correct styles for selected state", () => {
        const { getByText } = render(
            <QuizOption
                label="Option 1"
                isSelected={true}
                isCorrect={false}
                isIncorrect={false}
                disabled={false}
                onPress={() => {}}
            />
        );

        const option = getByText("Option 1").parent;
        expect(option.props.style).toContainEqual({
            backgroundColor: "#E0F7FA",
        });
    });

    it("applies the correct styles for correct state", () => {
        const { getByText } = render(
            <QuizOption
                label="Option 1"
                isSelected={false}
                isCorrect={true}
                isIncorrect={false}
                disabled={false}
                onPress={() => {}}
            />
        );

        const option = getByText("Option 1").parent;
        expect(option.props.style).toContainEqual({
            backgroundColor: "#C8E6C9",
        });
    });

    it("applies the correct styles for disabled state", () => {
        const { getByText } = render(
            <QuizOption
                label="Option 1"
                isSelected={false}
                isCorrect={false}
                isIncorrect={false}
                disabled={true}
                onPress={() => {}}
            />
        );

        const option = getByText("Option 1").parent;
        expect(option.props.style).toContainEqual({ opacity: 0.5 });
    });
});