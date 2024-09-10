import { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import VideoCard from "../../components/VideoCard";

const Bookmark = () => {
  const { data: posts } = useAppwrite(getAllPosts);

  return (
    <SafeAreaView className="w-full h-full bg-primary">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <Text className="text-white text-2xl font-psemibold mb-3">
              Saved Videos
            </Text>

            <SearchInput />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="You have not saved any videos."
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Bookmark;
