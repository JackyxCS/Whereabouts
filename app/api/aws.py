import datetime
import logging
import os
import boto3
import botocore
from botocore.config import Config
from botocore.exceptions import ClientError

"""
AWS CONFIGURATION
"""
# AWS_ACCESS_KEY_ID= os.environ.get('AWS_ACCESS_KEY_ID')
# AWS_SECRET_ACCESS_KEY= os.environ.get('AWS_SECRET_ACCESS_KEY')
BUCKET_NAME='whereaboutsbucket'


# my_config = Config(
#     region_name =  REGION_NAME

# )

def upload_to_aws(file_name, bucket):

    aws_object = str(int(datetime.datetime.now().timestamp())) + os.path.basename(file_name)
        # Upload the file
    s3_client = boto3.client('s3')
    try:
        s3_client.upload_file(
        file_name,
        bucket,
        aws_object,
        ExtraArgs={'ACL': 'public-read'}
        )


        config = botocore.client.Config(signature_version=botocore.UNSIGNED)
        object_url = boto3.client('s3', config=config).generate_presigned_url('get_object', ExpiresIn=0, Params={'Bucket': bucket, 'Key': aws_object})
        return object_url
    except ClientError as e:
        logging.error(e)
        return False
