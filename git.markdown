# git 

a way to keep track of changes you make to files. a very
commonly-used *version control system*

---

# why use git? 

it solves the problem of having "draft1.txt", "draft2.txt",
etc.

limitations of copying files and numbering them:
- when you forget what was in which version, no easy way to
  see what was in which file.
- no easy way to compare between versions.
- no easy way to go back to a previous version.
- clogs up the folder

---

# repos 

git repositories ("repos") are used to keep track of the
files associated with one project.

to keep things orderly, within your programming directory,
make a new directory for each project you start.

in each of your project directories, start a git repo to
keep track of your work. do this with `git init`

---

# sample workflow

- `mkdir` for your new project
- create some files in there, get started, etc.
- `git init`
- `git status` (should be empty)
- `git add doge.png wow.html`
- `git status` (now git is watching these files for
  changes!)
- `git commit -am "first commit"` (now you've saved a
  snapshot of the directory. note: it will only commit
  changes in the files you're watching.)
- `git status` (should be clean)

---

# good practices 

make a commit for each bit of progress you make. 

commit messages help track progress - make nice ones!  it
sucks to break something and then have a hard time finding
the last working version!

don't do `git add .` or `git add *` - you will add files
that you didn't mean to add!

---

# finding past versions

`git log`

each commit has a unique identifier called a hash. it'll
look something like this:
a5815fb05810bc0ebf53faaa4aba370055bf70d5

for a more compact log, do `git log --oneline`.

`git show 8d9c7f45ca1f1af59061fa64608666abef6cafd6` shows
what changed

to see what one file looked like at a particular commit, do:

`git show 8d9c7f45ca1f1af59061fa64608666abef6cafd6:file.js`

---

# discard uncommitted changes

`git stash`

gets rid of whatever uncommitted changes you have and
returns you to the state of your most recent commit.

---

# going back to a previous commit

`git checkout -b branchname hashnumber` 

checkout a previous commit to a new branch.

---

# working with branches

## make a new branch & switch to it

- `git branch dev` make a new branch named "dev"
- `git checkout dev` switch to branch "dev"


`git branch` see what branch you're on and what branches are
available.

`git branch -d dev` delete branch "dev"

when making a new branch, default behavior copies from
your current commit on your current branch. 

a common use of branches: a "master" branch with a working version
of the project and a "dev" branch with active development.
when "dev" is ready for "production", it gets merged into
"master."

---

# local vs remote

we have been working on our "local" machine.

but it's common to also have a copy on a "remote" machine or
service (like github.com).

the rest of this presentation will mostly use "github", but
please note that this is just one example of a "remote".

---

# github

website that hosts git repos.

github repos live on github.com. you can have a million
projects in local git repos and zero activity on github. 

---

# starting a new github repo

we will now put our local repo on github.com.

- go to github.com.
- on github: click the "new repository" button NOTE: do not
  make a README.
- on github: once your new repo is ready, the site will show
  its git url. it will look like:
  `git@github.com:cyberwizardinstitute/course-map.git`
- in terminal: `git remote add origin
  git@github.com:cyberwizardinstitute/course-map.git`
- in terminal: `git push origin master`

now, when you go to your repo on github, it should have the
contents of your last commit.

---

# some github tips

- what remote repo is my local repo associated with? `git remote -v`

- different branches can live on your remote: `git push origin dev`

---

# collaborating on existing github projects (w/push access)

here's a workflow for existing github projects that you have
push access to and where it will be fine if you push
directly to them. 

- on github, find the git url to clone the repo.
- in terminal: `git clone xyz.git`
- check that everything has copied with `ls`
- make whatever changes you want
- `git status`
- `git commit -am "adding xyz"` (commit locally)
- `git push origin master` (push your changes back up to
  github)

---

# collaborating on existing github projects (no push access)

you may want to work with existing projects that you don't
have push access for.

to do this, we will "fork" the existing project.

- on github, fork the repo you want to work with. (this will
  make a copy under your own github account, but not on
  your local machine).
- on github, go to your own fork of the repo and find the
  git url to clone the repo.
- in terminal: `git clone xyz.git` pulls your forked
  copy to your local machine
- check that everything has copied with `ls`

---

# collaborating on existing github projects (no push access) part 2

- make changes
- `git status`
- `git commit -am "adding xyz"` (commit locally)
- `git push origin master` (push your changes back up
  to your fork on github)
- to ask that your changes get merged back into the main
  branch, go to the shared repo (not your fork) on github and
  click "make a pull request"

---

# good practices when working on collaborative github repos

each time you return to working on your local copy of a
shared github repo, do `git pull origin master` to make sure
that you have the most up-to-date version of the shared repo.

your pull request may not get merged. this is why it's a good
idea to fork and work on your own branch of an existing
project.

---

# further learning

excellent, short videos that take you through the basics of
using git:

https://www.youtube.com/watch?v=u2rZLVWOWvs
https://www.youtube.com/watch?v=3cMP4oBKO34

this workshop and many others are at:

http://cyber.wizard.institute

---

# homework

Your homework is to do the git-it workshop on nodeschool:

http://nodeschool.io/#gitit

and to start keeping track of at least one project with git.
