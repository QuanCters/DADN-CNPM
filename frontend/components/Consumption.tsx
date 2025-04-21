import { LineChart } from "react-native-gifted-charts";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Home from "@/interface/home.interface";
import Device from "@/interface/device.interface";
import { useEffect, useState } from "react";

const data = [
  { value: 50, label: "Jan", dataPointText: "50" },
  { value: 80, label: "Feb", dataPointText: "80" },
  { value: 90, label: "Mar", dataPointText: "90" },
  { value: 70, label: "Apr", dataPointText: "70" },
];

const numberToMonth = (num: number) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[num - 1];
};

const Consumption = () => {
  const homeId = useSelector((state: RootState) => state.user.selectedHome);
  const [consumptionData, setConsumptionData] = useState<
    {
      value: number;
      label: string;
      dataPointText: string;
    }[]
  >([]);
  useEffect(() => {
    const fetchConsumptionData = async () => {
      try {
        if (!homeId) return;
        const response = await fetch(
          process.env.EXPO_PUBLIC_BACKEND_URL + "/home/measurement/" + homeId
        );
        if (!response.ok) {
          console.error("Error fetching consumption data:", response);
          throw new Error("Failed to fetch consumption data");
        }
        const data = await response.json();
        console.log("Data: ", data.result);
        setConsumptionData(
          data.result.map(
            (item: { total_consumption: number; month: String }) => ({
              value: Number(item.total_consumption.toFixed(2)),
              dataPointText: item.total_consumption.toFixed(2),
              label: numberToMonth(Number(item.month.split("-")[1])),
            })
          )
        );
      } catch (error) {
        console.error("Error fetching consumption data:", error);
      }
    };
    fetchConsumptionData();
  }, [homeId]);
  console.log("Consumption Data: ", consumptionData);

  return (
    <View style={styles.container}>
      <Title ownStyle={{ marginBottom: 10 }}>Consumption</Title>
      <View style={styles.chart}>
        <LineChart
          data={consumptionData}
          hideYAxisText
          textFontSize={13}
          textShiftY={8}
          textShiftX={8}
          thickness={3}
          showVerticalLines
          height={150}
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
