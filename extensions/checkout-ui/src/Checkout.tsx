import {
  Button,
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  BlockStack,
  View,
  Checkbox,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension , lines } = useApi();


  return (
    <Banner title="Save your cart">
      <BlockStack spacing="none">
					{lines.current.map((line, index) => (
						<View key={index} border="none" padding={['base', 'none']}>
							<Checkbox
								id={`Checkbox-${index}`}
								name="checkbox"
								// checked={checkedStates[line.merchandise.id] || false}
								// onChange={() => checkedList(line.merchandise.id)}
							>
								{line.merchandise.title}
							</Checkbox>
						</View>
					))}
				</BlockStack>
      
      <Button>Save</Button>
    </Banner>
  );
}