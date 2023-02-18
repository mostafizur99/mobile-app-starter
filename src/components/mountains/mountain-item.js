import { View, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Text from '../text/text';
import { spacing } from '../../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function MountainItem({ item }) {
    const { name, thumb } = item;
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate('Details', { mountain: item });
            }}
            style={styles.item}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                    style={styles.itemImage}
                    source={{ uri: thumb }}
                />
                <Text preset='h4' style={styles.itemName}>{name}</Text>
            </View>
            <AntDesign name="right" size={12} color="white" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4]
    },
    itemImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4],
    },
})