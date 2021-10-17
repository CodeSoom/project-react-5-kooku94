Feature('Home');

Scenario('타이틀을 볼 수 있다.', ({ I }) => {
  I.amOnPage('/');

  I.see('Bean');
});
