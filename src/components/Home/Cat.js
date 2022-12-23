import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-native-paper";
import { CatLoader } from "../../screens/Loader";

const Cat = () => {
  const [data, setData] = useState("");
  const [isLodading, setIsLoading] = useState(true);
  const height = Dimensions.get("window").height;

  useEffect(() => {
    catFact();
  }, []);

  const catFact = async () => {
    try {
      setIsLoading(true);
      var res = await axios.get("https://catfact.ninja/fact");
      setData(res.data);
      setIsLoading(false);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, { minHeight: height - 550 }]}>
        {isLodading ? (
          <CatLoader />
        ) : (
          <>
            <Text style={styles.factTxt}>{data.fact}</Text>
            <Text style={styles.factTxt}>{data.length}</Text>
          </>
        )}
      </View>
      <Button onPress={() => catFact()} loading={isLodading}>
        Next
      </Button>
    </View>
  );
};

export default Cat; 

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  factTxt: {
    fontSize: 17,
    color: "#000",
    fontWeight: "500",
  },
  loadingTxt: {
    fontSize: 22,
    color: "grey",
    fontWeight: "600",
  },
  card: {
    width: "96%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#dbfffb",
  },
});
