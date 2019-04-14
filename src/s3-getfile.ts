// went to node native nodejs promises
//Promise = require("bluebird");

import AWS = require('aws-sdk')
import { S3 } from 'aws-sdk'
//AWS.config.setPromisesDependency(Promise); // AWS will use bluebird promises since we overwrote global Promise var above with bluebird
var s3 = new AWS.S3({
  region: 'us-west-2'
  // accessKeyId: 'AKIAQ5QENW2GNLO6GPMY',
  // secretAccessKey: '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'
})
import * as fse from 'fs-extra'
// TODO: handle multiple records
// exports.getFiles = function(awsEventRecords) {
//     // call getFile for each object in Records array
// }

// takes an S3 event (http://docs.aws.amazon.com/AmazonS3/latest/dev/notification-content-structure.html)
// describing a file; returns a promise that will return the file content as its data
export function getFilePromise(event: any) {
  console.log('in s3-getfile')
  //console.log(JSON.stringify(event))

  var notification = event.s3 //event.Records[0].s3;
  var notificationKey = notification.object.key
  // TODO: handle SES notifications in addition to S3
  //var sesNotification = event.Records[0].ses;
  // console.log("SES Notification:\n", JSON.stringify(sesNotification, null,
  // 2));

  console.log('notificationKey: ', notificationKey, '   Bucket: ', notification.bucket.name)

  // Retrieve the email from its bucket

  return s3
    .getObject({ Bucket: notification.bucket.name, Key: notificationKey })
    .promise()
    .then(function(fileObject: object) {
      return fileObject
    })
    .then(function(value: any) {
      console.log('All is well!', value)
      return value.Body.toString()
    })
    .catch(function(error: any) {
      // Handle any error from all above steps
      console.log('getFilePromise error: ', error)
      return error
    })
}

export function putObject(item: any, key: string) {
  var params = {
    Body: JSON.stringify(item),
    Bucket: 'datalake-2019',
    Key: key
  }
  s3.putObject(params, function(err, data) {
    if (err) console.log(err, err.stack)
    // an error occurred
    else {
      console.log('s3 upload success')
    } // successful response
    /*
     data = {
      ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
      VersionId: "psM2sYY4.o1501dSx8wMvnkOzSBB.V4a"
     }
     */
  })
}
