import { LineChart } from "react-native-gifted-charts";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import Title from "@/components/Title";

const data = [
  { value: 50, label: "Jan", dataPointText: "50" },
  { value: 80, label: "Feb", dataPointText: "80" },
  { value: 90, label: "Mar", dataPointText: "90" },
  { value: 70, label: "Apr", dataPointText: "70" },
];
const Consumption = () => {
  return (
    <View style={styles.container}>
      <Title ownStyle={{ marginBottom: 10 }}>Consumption</Title>
      <View style={styles.chart}>
        <LineChart
          data={data}
          hideYAxisText
          textFontSize={13}
          textShiftY={-8}
          textShiftX={-5}
          thickness={3}
          showVerticalLines
          height={200}
          width={300}
          color={Colors.primary800}
          xAxisColor={Colors.primary800}
          yAxisColor={Colors.primary800}
          verticalLinesColor="rgba(14,164,164,0.5)"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    alignItems: "center",
    height: 250,
  },
});

export default Consumption;
