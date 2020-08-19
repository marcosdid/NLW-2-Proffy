import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import api from "../../services/api";

import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorite] = useState<number[]>([]);
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  const [subject, setSuject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeacherIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );

        setFavorite(favoritedTeacherIds);
      }
    });
  }

  function handleToogleFiltersVisivle() {
    setIsFilterVisible(!isFiltersVisible);
  }

  async function handlefiltersSubmit() {
    loadFavorites();

    const response = await api.get("classes", {
      params: { subject, week_day, time },
    });

    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToogleFiltersVisivle}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={(text) => setSuject(text)}
              style={styles.input}
              placeholder="Qual a matéria"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  style={styles.input}
                  placeholder="Qual o dia"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  style={styles.input}
                  placeholder="Qual horario"
                />
              </View>
            </View>

            <RectButton
              style={styles.submiteButton}
              onPress={handlefiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
