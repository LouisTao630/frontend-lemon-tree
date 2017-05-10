import React from 'react';
import RegistDialog from '../regist-dialog';
import renderer from 'react-test-renderer';

test('dialog should be ok',()=>{
	const component = renderer.create(
    <RegistDialog></RegistDialog>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnaptShot();

});