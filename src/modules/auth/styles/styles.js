import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  $WHITE: '$white',
  textContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '$white',
    width: 275,
    borderRadius: 5,
    marginVertical: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: 275, //
    alignItems: 'center',
  },
  buttonLabel: {
    fontFamily: 'Roboto-Medium',
    '@media android': {
      fontFamily: 'Roboto-Medium',
    },
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '$white',
  },
})
