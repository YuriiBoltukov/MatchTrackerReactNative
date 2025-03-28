import { Header } from "@rneui/themed";

export function AppHeader() {
  return (
    <Header
      containerStyle={{
        borderBottomWidth: 0,
        borderBottomColor: "transparent",
      }}
      backgroundColor={"#06080C"}
      centerComponent={{
        text: "Match Tracker",
        style: {
          color: "#fff",
          fontFamily: "TacticSans-RegIt",
          fontWeight: 600,
          fontSize: 28,
          fontStyle: "italic",
          textAlign: "center",
          maxWidth: "auto",
        },
      }}
    ></Header>
  );
}
