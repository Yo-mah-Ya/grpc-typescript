import * as grpc from "@grpc/grpc-js";
import {
  GreetingServiceClient,
  HelloRequest,
  HelloResponse,
} from "../gen/proto/hello";

const client = new GreetingServiceClient(
  "0.0.0.0:9090",
  grpc.credentials.createInsecure()
);

const payload = HelloRequest.fromObject({ name: "Test client", age: 100 });

const callback: grpc.requestCallback<HelloResponse> = (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(response?.toObject());
};

client.Hello(payload, callback);
