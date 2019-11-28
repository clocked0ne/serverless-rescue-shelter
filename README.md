# serverless-rescue-shelter

A serverless developer code test - serverless rescue shelter API.

## User Story
As an animal lover

I would like to see a single view of animals available for adoption

So that I can more easily decide which one to adopt

## Configuration

Set the base URL to the test API we are consuming data from (no trailing slash):

Linux/Mac:
```
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