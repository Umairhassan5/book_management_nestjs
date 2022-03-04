import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    // Create fake copy of user services
    const users : User[] = []

    fakeUsersService = {
      find: (email: string) => {
      const filterdUsers = users.filter(user => user.email === email)
        return Promise.resolve(filterdUsers)
      },
      
      create: (email: string, password: string) => {
         const user = { id: Math.floor(Math.random() * 9999), email, password} as User;
         users.push(user);
         return Promise.resolve(user);
      }
        
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('create a new user with a salted and hashed password', async () => {
    const user = await service.signup('met@met.com', 'met');

    expect(user.password).not.toEqual('1234');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signup with the email which is already in use', async () => {
    await service.signup('asdif@gmail.com', 'my');
    try {
      await service.signup('asdif@gmail.com', 'my'); 
    } catch (err){
        console.log(err)
    }
  });

  it('throws an error if ther user is not found with exiting email in the signin', async()=>{
     try{
        await service.signin('asdl@gmail.com', 'adfu');
     }
     catch(err){
        console.log(err)
     }
  })

  it('throws an error if invalid password is provided', async() => {
        await service.signup('asdif@gmail.com', 'my');
      try{
        await service.signin('asdif@gmail.com', 'kdkjif')
      } catch(err){
          console.log(err)
      }
  })

  it('throws an error if password is provided', async () => {
      await service.signup('asdif@gmail.com', 'my');
      const user = await service.signin('asdif@gmail.com', 'my');
      expect(user).toBeDefined();
  })

});
