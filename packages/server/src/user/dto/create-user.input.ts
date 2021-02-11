import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String)
  name: string | null;
}
