import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import PageHeader from "../../components/PageHeader";

import styles from "./styles";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";

function Favorite() {
  const [favorites, setFavorite] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorite(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favorite;
