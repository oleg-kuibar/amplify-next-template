import { AwsRum, AwsRumConfig } from 'aws-rum-web';

try {
    const config: AwsRumConfig = {
        sessionSampleRate: 1,
        identityPoolId: "us-east-1:78f8c835-6e88-4364-b190-506139326b6e",
        endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
        telemetries: ["errors","http"],
        allowCookies: true,
        enableXRay: false
    };

    const APPLICATION_ID: string = '0a2ddf77-fb31-4399-bdf8-bc394cc68651';
    const APPLICATION_VERSION: string = '1.0.0';
    const APPLICATION_REGION: string = 'us-east-1';

    const awsRum: AwsRum = new AwsRum(
        APPLICATION_ID,
        APPLICATION_VERSION,
        APPLICATION_REGION,
        config
    );

    awsRum.recordEvent('error', new Error('This is a test error for AWS RUM'))
} catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
}