import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import AppHeader from '../components/header/app-header'
import { colors } from '../theme/colors'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <AppHeader />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.black
    }
})