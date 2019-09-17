class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString('fr')  // 11/09/2019 à 20:05:50 ('fr')
    };
  }
  launchClock() {
    setInterval(() => { // =>를 통해 자동으로 바인딩 함수 생성 가능
      console.log('Updating...');
      this.setState({ currentTime: new Date().toLocaleString('en') });  // 9/11/2019, 8:06:02 PM  ('en')
    }, 1000);
  }

  // 변수에 담아 두었다가 클로저에서 this를 참조하는 대신 이 값을 사용하는 것 !!
  // 새로운 변수는 원래의 this 값을 복사한 것이 아니라 참조하는 것이다.
  // 이 방법으로 setInterveal()을 작성하면 다음과 같다 !!

  render() {
    console.log('Rendering...');
    return React.createElement(
      'div',
      null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime })
    );
  }
}