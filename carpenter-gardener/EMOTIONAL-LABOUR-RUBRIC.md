# Emotional labour: a rubric for the third axis

**Status: draft for review.** Nothing here is measured. The 425 dimension
scores are my judgement and the curve that prices them is a choice; both are
worth arguing with.

## Why replace contact

The third axis is currently "Contact (0–100)", which counts *how much of the
day is spent around other people*. For a developmental activity that is the
wrong quantity, and in places it is inverted:

| occupation | contact pctl | what the interaction actually asks |
|---|---|---|
| Cashiers | 94 | seconds long, scripted, nothing at stake |
| Waiters and Waitresses | 79 | transactional, high volume |
| Psychiatrists | 54 | sustained, high stakes, reading concealed states |
| Radiologists | 21 | almost none |

A cashier currently reads as more interpersonally developed than a
psychiatrist. Volume of contact is also not a ladder: nobody has to *grow
into* being near many people, so distance travelled along that axis does not
mean attainment, which is what the other two axes now mean.

What we want instead is the interpersonal capacity a person has to develop
before the work is possible — and, like pay and schooling, it should get
harder the further up you go.

## The five dimensions

Score each 0–4. Total 0–20.

### 1. Duration and continuity of the relationship
- **0** — Work is on objects, data or text; no sustained contact outside the team.
- **1** — Encounters last seconds to minutes, with strangers you will not see again.
- **2** — Repeated contact with the same colleagues or clients over weeks.
- **3** — A relationship carried for months, where knowing *this* person matters.
- **4** — A long relationship that is itself the medium of the work.

### 2. Emotional stakes in the room
- **0** — Nothing emotional is at stake.
- **1** — Mild friction: impatience, complaints, small conflicts.
- **2** — Real consequences for the other person: money, grades, housing, a job.
- **3** — Distress is routine: illness, fear, grief, family breakdown.
- **4** — Life-altering news, crisis or physical danger is an ordinary day.

### 3. Reading the other person
- **0** — Nothing has to be inferred.
- **1** — Read obvious cues: is this person annoyed, in a hurry.
- **2** — Judge unspoken needs and adjust approach.
- **3** — Detect states the person is concealing or cannot articulate.
- **4** — Accurate assessment of an internal state *is* the core skill, and
  getting it wrong is costly.

### 4. Managing your own state
- **0** — No display rules.
- **1** — Stay pleasant through routine irritation.
- **2** — Stay composed under sustained pressure or hostility.
- **3** — Contain your own reaction to someone's distress while still showing warmth.
- **4** — Sustained exposure to trauma, hostility or grief that must not reach
  the other person.

### 5. Responsibility for the other person's outcome
- **0** — None.
- **1** — Responsible for a transaction going smoothly.
- **2** — Responsible for a task or decision that affects them.
- **3** — Accountable for their development, recovery or safety over time.
- **4** — Their wellbeing is the deliverable, and failure has serious consequences.

## From score to coordinate

The rubric total **is** the measure. It is used directly:

```
coordinate = 0                                  when total = 0
coordinate = 15 + 85 × ((total − 1) / 19)^1.4   otherwise
```

| total | coord | | total | coord | | total | coord |
|---|---|---|---|---|---|---|---|
| 0 | 0.0 | | 7 | 31.9 | | 14 | 65.0 |
| 1 | 15.0 | | 8 | 36.0 | | 15 | 70.4 |
| 2 | 16.4 | | 9 | 40.3 | | 16 | 76.1 |
| 3 | 18.6 | | 10 | 44.9 | | 17 | 81.8 |
| 4 | 21.4 | | 11 | 49.6 | | 18 | 87.7 |
| 5 | 24.6 | | 12 | 54.5 | | 19 | 93.8 |
| 6 | 28.1 | | 13 | 59.7 | | 20 | 100.0 |

Three things are doing work here.

**The 15-point floor.** Any interpersonal demand at all starts at 15, because
a brief transaction can matter a great deal to whether the work succeeds — a
cashier or a waiter who cannot manage a counter is not doing the job. Only a
total of exactly zero, where the rubric found no demand on any of the five
dimensions, sits at the origin. The step from nothing to something is real and
the scale should show it.

**The 1.4 exponent** keeps the character of the other two axes: each further
step costs more than the one before. It is mild, because the rubric total is
already an ordinal sum rather than a physical quantity like dollars.

**The 0–100 range** leaves the axis comparable to education's 0–110 and pay's
0–210.

### Why not tiers

An earlier draft bucketed the totals into five tiers spaced by estimated
workforce share. Two problems. The totals discriminate across 21 levels and
the tiers threw that away — eleven occupations shared a total of 15 and were
indistinguishable from three others on 12. And the spacing depended on my
estimates of how US employment distributes across the tiers, which were the
least defensible numbers in the document. Using the total directly needs no
such estimate: the rubric is the instrument, and the curve only decides how
steeply its steps are priced.

## Worked examples

| occupation | D1 | D2 | D3 | D4 | D5 | total | coord | old contact |
|---|---|---|---|---|---|---|---|---|
| Farmworkers | 0 | 0 | 0 | 0 | 0 | 0 | 0.0 | 6 |
| Radiologists | 0 | 1 | 0 | 1 | 1 | 3 | 18.6 | 21 |
| Cashiers | 1 | 1 | 1 | 1 | 1 | 5 | 24.6 | **94** |
| Waiters and Waitresses | 1 | 1 | 2 | 2 | 1 | 7 | 31.9 | 79 |
| Electricians | 2 | 1 | 1 | 1 | 2 | 7 | 31.9 | 67 |
| Software Developers | 2 | 1 | 2 | 1 | 2 | 8 | 36.0 | 18 |
| Accountants and Auditors | 2 | 2 | 2 | 2 | 2 | 10 | 44.9 | 12 |
| Lawyers | 3 | 3 | 3 | 3 | 3 | 15 | 70.4 | 67 |
| Elementary School Teachers | 3 | 3 | 3 | 3 | 3 | 15 | 70.4 | 85 |
| Registered Nurses | 2 | 4 | 3 | 4 | 3 | 16 | 76.1 | 85 |
| Child and Family Social Workers | 4 | 4 | 4 | 4 | 4 | 20 | 100.0 | 94 |
| Psychiatrists | 4 | 4 | 4 | 4 | 4 | 20 | 100.0 | **54** |

The two that motivated this invert as intended: the cashier drops 94 → 25, the
psychiatrist rises 54 → 100.

## What it does to the model

All three axes become the same kind of thing — a ladder the child has to climb,
where each rung costs what every rung before it cost together:

- **pay** — 23 units per doubling of median earnings
- **education** — 23 units per halving of the adults who reach that credential
- **emotional labour** — 23 units per halving of the workforce at that tier

Caring work gets markedly harder to reach, which it currently is not: nursing,
social work, counselling and psychiatry all move up. Low-wage high-footfall
service work gets nearer the origin, which is where the model should put it —
those jobs are hard on the person, but they are not hard to *reach*, and this
axis measures reachability.

## Open questions

1. **The curve.** The 15-point floor and the 1.4 exponent are judgement, not
   measurement. The floor says any interpersonal demand is a real step up from
   none; the exponent says later steps cost more than earlier ones.
2. **Five dimensions, equally weighted.** D3 and D4 may deserve more weight if
   the construct is EQ specifically rather than emotional labour generally.
3. **Does the data still carry raw contact?** It may be worth keeping as a
   separate column so the old axis can be compared with the new one.
4. **Scoring all 85** is 425 judgements. I can produce a first pass for you to
   correct, which is how the rest of this table was built.
