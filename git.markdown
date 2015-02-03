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

# key git commands  

https://www.youtube.com/watch?v=u2rZLVWOWvs

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

# going back to a previous commit

`git revert` 

more on going back to previous commits:
https://www.atlassian.com/git/tutorials/undoing-changes

---

# github

https://www.youtube.com/watch?v=3cMP4oBKO34

(addendum: i prefer `git push origin master`)

---

# starting a new github repo

github repos live on github.com. you can have a million
projects in local git repos and zero activity on github. to
put your local repo online, first go to github.com.

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

`git remote -v`

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
- `git commit -am "adding xyz"` (make a commit on your local
  machine)
- `git push origin master` (push your changes back up to
  github)

---

# collaborating on existing github projects (no push access)

for existing github projects that you'd like to work on but
that you don't have push access to, or where you'd like your
own github repo to play around in before pushing to the main
branch.

- on github, fork the repo you want to work with. (this will
  give you your own copy of the repo on github, but not on
  your local machine).
- on github, go to your own fork of the repo and find the
  git url to clone the repo.
- in terminal: `git clone xyz.git` (this pulls your forked
  copy to your local machine)
- check that everything has copied with `ls`
- make whatever changes you want
- `git status`
- `git commit -am "adding xyz"` (this makes a commit on your
  local machine)
- `git push origin master` (this pushes your changes back up
  to your fork on github)
- to ask that your changes get merged back into the main
  branch, go to the main repo (not your fork) on github and
  click "make a pull request"

---

# good practices when working on collaborative github repos

each time you return to working on your local copy of a
shared github repo, do `git pull origin master` to make sure
that you have the most up to date version of the repo.

many existing open source projects have code review before
your pull request can be merged. this is why it's a good
idea to fork and work on your own branch of an existing
project.

---

# homework

Your homework is to do the git-it workshop on nodeschool:

http://nodeschool.io/#gitit

and to submit a pull request to a project with a useful fix
or addition.
