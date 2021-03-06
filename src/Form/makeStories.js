import React from 'react';
import { action } from '@storybook/addon-actions';

export default(storiesOf, {
  Space,
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  Button,
  Form,
}) =>
  storiesOf('Form', module)
    .add('simple', () => (
      <Form
        initialValues={{
          treeType: 'maple',
        }}
        onSubmit={action('onSubmit')}
        validationSchema={
        Form.validation.object().shape({
          leafName: Form.validation.string().required(),
          leafColor: Form.validation.object().required(),
          isAquatic: Form.validation.boolean().equals([true]),
          treeType: Form.validation.string().required(),
        })
      }
      >
        <Form.Form>
          <Space margin={[0, 0, 2, 0]}>
            <TextInput
              name="leafName"
              label="Leaf Name"
              placeholder="pine"
              defaultValue="eucalyptus"
            />
          </Space>
          <Space margin={[0, 0, 2, 0]}>
            <Select
              name="leafColor"
              label="Leaf color"
              placeholder="Select a color"
              options={[{ label: 'Red', value: 'Red' }, { label: 'Green', value: 'Green' }]}
              defaultSelected={{ label: 'Green', value: 'Green' }}
            />
          </Space>
          <Space margin={[0, 0, 2, 0]}>
            <Checkbox
              name="isAquatic"
              label="Is an aquatic plant"
              defaultChecked
            />
          </Space>
          <RadioButton
            name="treeType"
            label="Oak"
            value="oak"
          />
          <RadioButton
            name="treeType"
            label="Maple"
            value="maple"
          />
          <RadioButton
            name="treeType"
            label="Mahogany"
            value="mahogany"
          />
          <Space margin={[2, 0, 0, 0]}>
            <Button type="submit">Submit</Button>
          </Space>
        </Form.Form>
      </Form>
    ));
