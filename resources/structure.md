---

layout: default
title: MITRE Engage Structure
custom_css: default

---

## MITRE Engage Terminology

A goal for Engage was to employ enough structure and rigor to be useful scientifically to the practitioner, without
becoming needlessly rigid or complex. We began with terminology found in the
[DOD Dictionary of Military and Associated Terms](https://www.jcs.mil/Portals/36/Documents/Doctrine/pubs/dictionary.pdf?ver=2020-06-18-073638-727), 
as well as
the [United States Government Compendium of Interagency and Associated Terms](https://www.jcs.mil/Portals/36/Documents/Doctrine/dictionary/repository/usg_compendium.pdf?ver=2019-11-04-174229-423).

We modified those terms to fit the domain of cyber-based adversary engagement:

- **Adversary Engagement**: Engagement is the combination of denial and deception to increase the cost and decrease the
  value of the adversary's cyber operations. The goal of adversary engagement is to expose adversaries and their
  weaknesses, learn about their capabilities and intentions, and impose costs on them.


- **Cyber Denial**: Denial is the ability and effort to prevent or impair the collection of intelligence by an 
  adversary.<sup>[Heckman2015](https://www.amazon.com/Cyber-Denial-Deception-Counter-Information-ebook/dp/B017YMXR24/ref=sr_1_1?dchild=1&keywords=heckman+deception&qid=1627423788&sr=8-1)</sup>. 
  Denial also supports the prevention or disruption of and adversary's attempt at achieving effects.

- **Cyber Deception**: The deceiver reveals deceptive facts and fictions to mislead the opponent, while concealing
  critical facts and fictions to prevent the opponent from forming the correct estimates or taking appropriate
  actions<sup>[Heckman2015](https://www.amazon.com/Cyber-Denial-Deception-Counter-Information-ebook/dp/B017YMXR24/ref=sr_1_1?dchild=1&keywords=heckman+deception&qid=1627423788&sr=8-1)</sup>.

- **Goals**: The big objectives you would like to accomplish.

- **Approaches**: The methods you use to make progress toward your goals. Engage uses the term *Approaches* to refer to
  Tactics like those described in ATT&CK®. We use the term Approaches instead of Tactics to disambiguate when we refer
  Engage Approaches versus ATT&CK® Tactics.

- **Activities**: The concrete activities you use to make progress towards each approach. Engage uses the term 
  *Activities* to refer to Techniques like those described in ATT&CK®. We use the term Activities instead of Techniques
  to disambiguate between Engage Activities and ATT&CK® Techniques.

- **Strategic Actions**: The goals, approaches, and activities that are undertaken to support your operational strategy.

- **Engagement Actions**: The goals, approaches, and activities that are undertaken against your adversary.

## MITRE Engage Matrix Structure

The Engage [Matrix]({{ site.baseurl }}/matrix) consists of the following core components:

* Across the top of the matrix are the Engage *Goals*.
* The next row down contains the Engage *Approaches*.
* The remainder of the matrix is composed of the Engage *Activities*.

These actions are divided into two categories:

- *Strategic* goals, approaches, and activities bookend the matrix and ensure that defenders appropriately drive
  operations with strategic planning and analysis.
- *Engagement* goals, approaches, and activities are the traditional cyber denial and deception activities that are used
  to drive progress towards the defender's strategic goals. There are a number of vendor products designed to assist the
  defender to implement these activities.

## MITRE Engage ID Format

Every Goal, Approach, and Activity has a unique ID.

* **S**trategic **GO**als begin with **SGO**
* **E**ngagement **GO**als begin with **EGO**
* **S**trategic **AP**proaches begin with **SAP**
* **E**ngagement **AP**proaches begin with **EAP**
* **S**trategic **AC**tivities begin with **SAC**
* **E**ngagement **AC**tivities begin with **EAC**

## MITRE Engage ATT&CK® Mappings

By mapping the various Engagement Activities to ATT&CK®, we can ensure that each activity in Engage is driven by
observed adversary behavior. Each mapping is broken down as follows:

* ATT&CK ID & Name: The ATT&CK Technique ID and Name: The specific adversary behavior we are looking at.
* Adversary Vulnerability: The vulnerability that the adversary exposes when they engage in the specified behavior.
* Engagement Activity: The action the defender can take to take advantage of the vulnerability the adversary has
  exposed.

In our first release of MITRE Engage, we have chosen not to include any specific activity implementations or use cases
in these mappings. To provide some guidance, we have included expanded definitions for each Activity including concrete
examples. We hope these definitions will provide some examples of the art of the possible. If you have questions, please
reach out! We would be happy to share our past operational implementations or discuss your ideas.

In the future, we hope to find new ways to dive into specific implementations, including collecting open source examples
of activity implementations, either from vendor products or individual practitioners.

<!-- ## Papers
Coming soon with the official MITRE Engage release later this fall! -->
