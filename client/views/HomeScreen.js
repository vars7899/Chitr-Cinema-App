import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View, ScrollView } from "react-native";
import { theme } from "../global";
import IconButton from "../components/Buttons/IconButton";
import { AntDesign } from "@expo/vector-icons";
import GenreCapsule from "../components/Buttons/GenreCapsule";
import styles from "./HomeScreenStyle";
import axios from "axios";
import MovieListRow from "../components/Home/MovieListRow";
import { tmdbKey } from "../keys";
import NowPlayingRow from "../components/Home/NowPlayingRow";

const HomeScreen = () => {
  const [trendingMovieList, setTrendingMovieList] = useState(null);
  const [nowPlayingList, setNowPlayingList] = useState(null);
  const [upcomingList, setUpcomingList] = useState(null);
  async function fetchTrending() {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbKey}`
      );
      setTrendingMovieList(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchNowPlaying() {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}`
      );
      setNowPlayingList(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchUpcoming() {
    try {
      const { data } = await axios.get(
        `
        https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}`
      );
      setUpcomingList(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchTrending();
    fetchNowPlaying();
    fetchUpcoming();
  }, []);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.color.dark }]}
    >
      <View style={styles.header}>
        <View style={styles.left}>
          <Text style={[styles.brand, { color: theme.color.text }]}>
            Movies
          </Text>
        </View>
        <View style={styles.right}>
          <IconButton
            icon={
              <AntDesign name="search1" size={30} color={theme.color.text} />
            }
          />
          <IconButton
            icon={
              <AntDesign name="filter" size={30} color={theme.color.text} />
            }
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.genreList}>
          <FlatList
            data={[
              "Action",
              "Horror",
              "Adventure",
              "Thriller",
              "Comedy",
              "Sci-fi",
            ]}
            renderItem={({ item }) => <GenreCapsule item={item} />}
            horizontal
          />
        </View>
        <NowPlayingRow list={nowPlayingList} title="Now Playing" />
        <MovieListRow list={trendingMovieList} title="Trending Now" />
        <MovieListRow list={upcomingList} title="Upcoming" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
