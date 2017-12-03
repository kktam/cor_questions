# COR Question 2

## Question

> I have to access the development Redhat Enterprise Linux server in secure shell
> from my Ubuntu workstation very often and I am sick of having to input my login ID 
> and password each time I open a shell. How do I skip the login ID/password input
> step in a secure manner?

## Answer

### Use Password-less SSH

This will work because both client and server are variants of Linux and support OpenSSH.

#### Steps

To create automatic login for user1 from host A to user2 at host B.
(the goal is to login using command ` ssh user2@B ` without typing user2's password )

1. first login on host A as user1 and generate a pair of authentication keys.
   use command ` ssh-keygen -t rsa `
2. use ssh to create a directory at ~/.ssh as user2 on host B.
   use command ` ssh user2@B mkdir -p .ssh `
3. append user1's public key to user2@B:.ssh/authorized_keys
   use command `cat .ssh/id_rsa.pub | ssh user2@B 'cat >> .ssh/authorized_keys'  `


