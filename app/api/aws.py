import datetime
import os
import boto3
import botocore
from botocore.exceptions import ClientError

REGION_NAME = 'us-east-1'
def upload_to_aws(file_name, bucket):

    aws_object = f"{os.path.basename(file_name)} -{int(datetime.datetime.now().timestamp())}"
        # Upload the file
    s3_client = boto3.client('s3')
    #try:
    s3_client.upload_file(
        file_name,
        bucket,
        aws_object,
        ExtraArgs={'ACL': 'public-read'}
        )


    config = botocore.client.Config(signature_version=botocore.UNSIGNED)
    object_url = boto3.client('s3', config=config).generate_presigned_url('get_object', ExpiresIn=0, Params={'Bucket': bucket, 'Key': aws_object})
    return object_url
#except:
