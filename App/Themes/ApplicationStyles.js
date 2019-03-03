import { Platform } from 'react-native'
import { Metrics, Colors, Fonts } from '../Themes'

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    safeArea: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    headerTitle: {
      ...Fonts.style.headerTitle,
      color: Colors.dark,
      ...Platform.select({
        android: {
          marginLeft: 18
        }
      })
    },
    floatBackButton: {
      ...Metrics.signInFloatBackButton,
      position: 'absolute'
    },
    floatBackIcon: {
      ...Metrics.signInFloatBackIcon
    }
  }
}

export default ApplicationStyles
