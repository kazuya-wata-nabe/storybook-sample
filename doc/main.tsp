import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "@typespec/versioning";

using TypeSpec.Http;
using TypeSpec.Rest;
using OpenAPI;
 
@service({
  title: "Sample API",
})

namespace SampleApi;

model Review {
  id: string;
  @minLength(1)
  @maxLength(50)
  title: string;

  @minLength(1)
  @maxLength(100)
  content: string;
}

@error
model Error {
  message: string;
}

model BadRequest<T> {
  ...BadRequestResponse,
  @body body: T;
}

model ListResponse<T> {
  ...OkResponse;
  ...Body<T[]>;
}


op List<T, U>(...U): ListResponse<T> | BadRequest<Error>;
op Create<T>(...T): NoContentResponse | BadRequest<T>;
op Update<T>(...T): T | BadRequest<T> | NotFoundResponse;

@route("/reviews")
@tag("Review")
interface Reviews {
  @get 
  op list(
    @query title?: string;
  ): ListResponse<Review> | BadRequest<Error>;
  @post 
  op create is Create<Review>;
  @put 
  op update is Update<Review>;
}