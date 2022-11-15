
import { Query, Resolver } from 'type-graphql';


@Resolver(() => String)
export class AuthResolver {
    @Query(() => String)
    async hello() {
        return 'hello world'
    }
}