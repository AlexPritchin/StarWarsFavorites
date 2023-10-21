import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {
  title?: string;
  value?: string;
}

const DetailsItem: React.FC<Props> = ({ title, value }) => {
  return (
      <View style={styles.containerView}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: '500' }}>{title}</Text>
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
});

export default DetailsItem;
