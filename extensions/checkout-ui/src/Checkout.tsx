import {
  Button,
  Banner,
  useApi,
  useTranslate,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension  } = useApi();


  return (
    <Banner title="Save your cart">
      {translate('welcome', {target: extension.target})}
      
      <Button>Save</Button>
    </Banner>
  );
}