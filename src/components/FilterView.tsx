import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

const MIN_PRICE = 0;
const MAX_PRICE = 500;

const FilterView = () => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);
  const theme = useTheme();
  return (
    <View
      style={{
        paddingVertical: 24,
        gap: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "700" }}>
          Filters
        </Text>
        <TouchableOpacity>
          <Text> Reset </Text>
        </TouchableOpacity>
      </View>
      {/** Range */}
      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ marginBottom: 24 }}>
          <Text> Price Range </Text>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: theme.colors.border,
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: `${(100 * minPrice) / MAX_PRICE}%`,
              width: `${(100 * (maxPrice - minPrice)) / MAX_PRICE}%`,
              height: "100%",
              backgroundColor: theme.colors.primary,
            }}
          />
          <View style={{ position: "absolute", left: "10%" }}>
            <SliderHandle />
          </View>
          <View style={{ position: "absolute", left: "50%" }}>
            <SliderHandle />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text style={{ color: theme.colors.text, opacity: 0.5 }}>$0</Text>
          <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
            ${MAX_PRICE}
          </Text>
        </View>
      </View>
      {/** Sports Category */}
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
          Sports
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
          {new Array(10).fill("").map((_, index) => {
            return (
              <Chip
                key={index}
                index={index}
                label="Item"
                isSelected={index === 0}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const Chip = ({
  index,
  isSelected,
  label,
}: {
  isSelected: boolean;
  label: string;
  index: number;
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: isSelected
          ? theme.colors.text
          : theme.colors.background,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: isSelected ? theme.colors.background : theme.colors.text,
        }}
      >
        {label} {index}
      </Text>
    </View>
  );
};

const SliderHandle = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        height: 24,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        transform: [
          {
            translateX: -12,
          },
          {
            translateY: -12,
          },
        ],
        backgroundColor: theme.colors.background,
      }}
    >
      <View
        style={{
          width: 3,
          height: 3,
          borderRadius: 10,
          backgroundColor: theme.colors.primary,
        }}
      />
    </View>
  );
};

export default FilterView;

const styles = StyleSheet.create({});
