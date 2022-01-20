import {StyleSheet} from 'react-native';
import useOwnTheme from '../../utils/theme';

const styles = ({
  size = 80,
  borderWidth = 3,
  borderSpacing,
  borderColor,
  borderType,
  spacingBorderColor,
}) => {
  const {profilePicture} = useOwnTheme().colors.components;

  const borderTypes = {
    dashed: 'dashed',
    dotted: 'dotted',
    solid: 'solid',
  };

  return StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: size,
      width: size,
      borderRadius: size / 2,
      borderWidth,
      borderColor: borderColor || profilePicture.defaultBorderColor,
      borderStyle: borderTypes[borderType] || 'solid',
    },
    spacingContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: size - borderWidth,
      width: size - borderWidth,
      borderRadius: (size - borderWidth) / 2,
      borderWidth: borderSpacing || borderWidth,
      borderColor: spacingBorderColor || profilePicture.spacingBorderColor,
    },
    image: {
      height: size - borderWidth - (borderSpacing || borderWidth),
      width: size - borderWidth - (borderSpacing || borderWidth),
      borderRadius: (size - borderWidth - (borderSpacing || borderWidth)) / 2,
    },
  });
};

export default styles;
