# serverless-rescue-shelter

A serverless developer code test - serverless rescue shelter API.

## User Story

As an animal lover

I would like to see a single view of animals available for adoption

So that I can more easily decide which one to adopt

## Configuration

Set the base URL to the address of the test API we are consuming data from (no trailing slash):

Linux/Mac:
```bash
export BASE_URL=<base-address>
```
Windows (Powershell):
```
$env:BASE_URL="<base-address>"
```
Windows 10 Command Prompt:
```
set BASE_URL=<base-address>
```

If this API were secured you would also expect to set an authentication `API_KEY` or similar here.

## Tests

Run the unit test suite using `npm test`

## Limitations

This is limited to Lambda function serverless testing, as to test this as an API Gateway accessible
REST endpoint would require using AWS accounts, Docker and other services configured in order for
SAM Local, LocalStack, Serverless or other local cloud test loop environments.

As such, to test this as a locally running REST API endpoint, a basic Connect app has been configured:

## Starting the REST API

```bash
npm start
```

### Accessing the REST API endpoint

View the localhost endpoint:

```
http://localhost:5000/
```