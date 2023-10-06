import * as grpc from "@grpc/grpc-js";
import {
  UnimplementedGreetingServiceService,
  HelloRequest,
  HelloResponse,
} from "../gen/proto/hello";

const hello: grpc.UntypedHandleCall = (
  call: grpc.ServerUnaryCall<HelloRequest, HelloResponse>,
  callback: grpc.sendUnaryData<HelloResponse>
) => {
  const name = call.request?.name;
  const age = call.request?.age;
  console.log({
    name,
    age,
  });
  callback(null, HelloResponse.fromObject({ message: name, age }));
};

const server = new grpc.Server();
server.addService(UnimplementedGreetingServiceService.definition, {
  Hello: hello,
});

server.bindAsync(
  "0.0.0.0:9090",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) console.error(err);
    server.start();
    console.log(`server start listing on port ${port}`);
  }
);
