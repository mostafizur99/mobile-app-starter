import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../text/text';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';

export default function InfoBox({ title, value }) {
    return (
        <View style={styles.plannerSection}>
            <Text preset="small" style={{ textTransform: 'uppercase' }}
            > {title}</Text>
            <Text preset="h2">{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    plannerSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.gray,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4],
    },
});