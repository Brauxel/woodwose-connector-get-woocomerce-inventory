# woodwose-connector-get-woocomerce-inventory

## AWS CLI Commands

### Update the current lambda function

First run `npm run build-eslint`
Next run
`aws lambda update-function-code \ --function-name getWooCommerceInventory \ --zip-file fileb://dist/index.zip`
