import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserObjectType {
  @Field(() => Int, { description: 'user uniq id' })
  id: number;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String)
  name: string | null;
}
