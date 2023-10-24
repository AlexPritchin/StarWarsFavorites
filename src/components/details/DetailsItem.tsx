import { StyleSheet, Text, View } from 'react-native';

interface Props {
  title?: string;
  value?: string;
}

const DetailsItem: React.FC<Props> = ({ title, value }) => {
  return (
    <View style={styles.containerView}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18 }}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    paddingVertical: 15,
    flexDirection: 'row',
    gap: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '500',
  },
});

export default DetailsItem;
