import { TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import List from './list';
import { Trash2 } from 'lucide-react-native';

export default function Delete(props) {

    return (
        <TouchableOpacity activeOpacity={1}>
            <Trash2 />
        </TouchableOpacity>
    )
}