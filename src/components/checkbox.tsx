import { TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Square, SquareCheckBig} from 'lucide-react-native';

export default function Checkbox(props) {
    const [checked, setChecked] = useState(false);

    function toggleState() {
        setChecked(!checked);
    }

    return (
        <TouchableOpacity style={styles.checkbox} activeOpacity={1} onPress={toggleState}>
            {!checked ? <Square strokeWidth={1.5} /> : <SquareCheckBig strokeWidth={1.5} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        width: 25,
        height: 25,
        marginRight: 12
    }
})