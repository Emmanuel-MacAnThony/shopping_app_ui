import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useRef, useMemo, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import MasonryList from "reanimated-masonry-list";
import { BlurView } from "expo-blur";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../components/CustomBackdrop";
import FilterView from "../components/FilterView";

const AVATAR_URI =
  "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60";

const IMAGE_1 =
  "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60";

const IMAGE_2 =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60";

const IMAGE_3 =
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80";

const CATEGORIES = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Accessories 2",
  "Accessories 3",
  "Accessories 4",
];

const HomeScreen = () => {
  const { colors } = useTheme();
  const [categoriesIndex, setCategoriesIndex] = useState<number>(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "80%"], []);

  const openFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 24,
            // paddingVertical: 24,
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            style={{ width: 52, aspectRatio: 1, borderRadius: 52 }}
            source={{ uri: AVATAR_URI }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
                color: colors.text,
              }}
              numberOfLines={1}
            >
              Hi, James 👋
            </Text>
            <Text
              style={{ color: colors.text, opacity: 0.75 }}
              numberOfLines={1}
            >
              Discover fashion that suit your style
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Icons name="bell" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        {/** search bar section */}
        <View style={{ flexDirection: "row", paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              gap: 12,
              flexDirection: "row",
            }}
          >
            <Icons
              name="magnify"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
            <TextInput
              placeholder="Search"
              style={{
                flex: 1,
                fontSize: 16,
                opacity: 0.5,
                color: colors.text,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              backgroundColor: colors.primary,
            }}
            onPress={openFilterModal}
          >
            <Icons name="tune" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>
        {/**Grid Collection View */}
        <View style={{ paddingHorizontal: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "700" }}>
              New Collection
            </Text>
            <TouchableOpacity>
              <Text> See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
            <View style={{ flex: 1 }}>
              <Card />
            </View>

            <View style={{ flex: 1, gap: 12 }}>
              <Card />
              <Card />
            </View>
          </View>
        </View>
        {/**Categories */}
        <FlatList
          data={CATEGORIES}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const isSelected = categoriesIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoriesIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderRadius: 100,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontWeight: "600",
                    fontSize: 16,
                    opacity: isSelected ? 1 : 0.5,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {/** masonry list */}
        <MasonryList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(item): string => item}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
          renderItem={({ item, i }) => {
            return (
              <View style={{ padding: 6 }}>
                <View
                  style={{
                    aspectRatio: i === 0 ? 1 : 2 / 3,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 24,
                  }}
                >
                  <Image
                    source={{ uri: IMAGE_3 }}
                    resizeMode="cover"
                    style={StyleSheet.absoluteFill}
                  />
                  <View style={[StyleSheet.absoluteFill, { padding: 12 }]}>
                    <View style={{ flexDirection: "row", gap: 8, padding: 4 }}>
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 16,
                          fontWeight: "600",
                          color: colors.text,
                        }}
                      >
                        PUMA Everyday Hussle
                      </Text>
                      <View
                        style={{
                          backgroundColor: colors.background,
                          alignItems: "center",
                          borderRadius: 100,
                          aspectRatio: 1,
                          height: 32,
                          justifyContent: "center",
                        }}
                      >
                        <Icons
                          name="heart-outline"
                          size={20}
                          color={colors.text}
                        />
                      </View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <BlurView
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.35)",
                        padding: 8,
                        borderRadius: 100,
                        overflow: "hidden",
                      }}
                      intensity={20}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          flex: 1,
                          fontWeight: "600",
                          color: "white",
                          fontSize: 16,
                          marginLeft: 4,
                        }}
                      >
                        $160
                      </Text>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 16,
                          paddingVertical: 8,
                          borderRadius: 100,
                          backgroundColor: "white",
                        }}
                      >
                        <Icons name="cart-plus" size={20} color={"#000"} />
                      </TouchableOpacity>
                    </BlurView>
                  </View>
                </View>
              </View>
            );
          }}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
      <BottomSheetModal
        snapPoints={snapPoints}
        index={1}
        ref={bottomSheetModalRef}
        backdropComponent={(props) => <CustomBackdrop {...props} />}
      >
        <FilterView />
      </BottomSheetModal>
    </ScrollView>
  );
};

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
        position: "relative",
        borderRadius: 24,
      }}
    >
      <Image
        source={{ uri: IMAGE_1 }}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          paddingHorizontal: 10,
          paddingVertical: 12,
          backgroundColor: "rgba(0,0,0,0.25)",
          borderRadius: 100,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "white",
          }}
        >
          $130
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
