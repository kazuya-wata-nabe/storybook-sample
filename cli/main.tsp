import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

using TypeSpec.Http;
using TypeSpec.Rest;

@service({
    title: "sample service",
    version: "1.0"
})

namespace SampleService;

model Review {
  id: string;
  title: string;
  content: string;
  added_at: utcDateTime;
  finished_at?: utcDateTime;
}

union UserRole {
  ADMIN: "ADMIN",
  COMMON: "COMMON",
}

@route("/me")
@tag("User")
namespace User {
  interface Me {
    @get read(@query limit?: int32): {};
  }
}

@route("/reviews")
@tag("Review")
namespace Reviews {
  interface Reviews {
    @get list(@query limit?: int32): Review[];
    @post create(new_task: Review): Review;
  }
    
  @route("/{id}")
  interface EachTask {
    @get read(@path id: string): Review;
    @put update(@path id: string, update_task: Review): Review;
    @delete delete(@path id: string): {
      deleted_task_id: string;
    };
  }
}