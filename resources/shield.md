---

layout: default
title: What Happened to Shield
custom_css: default

---
## How Does Engage Differ from Shield?

MITRE Engage&trade; replaces the MITRE Shield knowledge base. Based on technical feedback from the cyber community, 
we&#39;ve streamlined Shield to focus on the areas of denial, deception, and adversary engagement. By bookending these 
Engagement Activities with strategic planning and analysis, we hope that MITRE Engage&trade; will help organizations to 
better plan and implement real-world adversary engagement strategies.

We&#39;re aware that the change from Shield to Engage will create the need for major re-design of processes and 
tooling. We think these changes are necessary to help cyber practitioners, leaders, and vendors understand the tools 
and strategies available to them to build adversary engagement operations.


To ensure that MITRE Engage&trade; keeps a focus on strategic planning, we have implemented the following changes:

1. **Decreased the number of activities and, in places, broadened the scope of individual activities.**

    For example, we have folded the Shield Techniques of Decoy Account, Decoy Content, Decoy Credentials, Decoy Process, and Decoy Systems into a single Activity: Decoy Artifacts and Systems. Each of these Shield Techniques may look very different in implementation. However, we believe the reason a defender may utilize one of them, and the effect the activity may have on the adversary, is shared across the various implementations. For example, a defender may use a Decoy Account or Decoy Content as a tripwire. In either case, the defender hopes to expose adversary movement. This release of Engage seeks to abstract away, to a degree, activity implementations to allow the defender to focus on how the activity can impact the adversary and drive progress towards an intended outcome. In future Engage releases we hope to provide more details into specific implementations of a given Activity.

2. **Removed the concepts of Procedures, Use Cases, and Opportunity Spaces.**

    These changes were an intentional adjustment to remove the focus from individual activities, and instead, focus on how these activities fit into the context of larger strategic objectives. Once we have fully fleshed out this emphasis on strategic planning and analysis, we would like to revisit the idea of Engagement Activities to expand the knowledge base and provide a deeper dive into various implementations and opportunities each activity offers. In the very near future, we would like to introduce the concept of References. References are intended to provide proven, real-world examples of Activity implementations. We are looking to the community to help curate these References. [Click here]({{ site.baseurl }}/resources/contribute) to learn more about how to contribute References and other data to Engage.

3. **Changed the terms _Tactics_ and _Techniques_ to _Approaches_ and _Activities_**. 
    
    We wanted to remove any confusion between what we call Approaches and Activities in Engage versus ATT&amp;CK Tactics or Techniques. Additionally, we have added the concept of _Goals_ as a layer above Approaches. We have also divided the Engage Goals, Approaches, and Activities into two categories: Strategic actions and Engagement actions. All these changes were made in order to build strategic planning into the foundation of Engage. For full definitions for each of these actions, [click here]({{ site.baseurl }}/resources/structure).

4. **Added the concept of Adversary Vulnerabilities**.

    Adversary Vulnerabilities are the weaknesses an adversary unintentionally exposes when they engage in a particular behavior. The defender has an opportunity to impact the adversary by taking advantage of such a vulnerability. We have chosen to include Adversary Vulnerabilities in place of Opportunity Spaces to make adversary behavior a focal point of Engage. We feel that this framing helps the defender keep the adversary, and the adversary&#39;s behavior, at the center of every operation.

### Why Did We Make These Changes?

We feel strongly that strategic planning and analysis must be foundational components of every adversary engagement 
operation. MITRE Engage&trade; allows the defender to view the same expertise captured in the Shield knowledge base 
through this lens of planning and analysis.

### Why the Name Change?

While Shield was an active defense knowledge base, MITRE Engage&trade; has tightened the focus exclusively to denial, 
deception, and adversary engagement. We feel that the name Engage more accurately represents this new, more streamlined 
focus.

### How Do I Switch from Shield to Engage?

As we transition from MITRE Shield to MITRE Engage&trade;, you may be asking yourself, "Where do I start?" Below is a 
step-by-step guide for transitioning from Shield to Engage.

#### *Implement key changes to the Engage&trade; structure:*

* Tactics have been renamed Approaches 
* Techniques have been renamed Activities
* Goals have been added as a category above Approaches
* Each of these categories has been broken into two sets with unique IDs, Strategic Goals/Approaches/Activities and Engagement Goals/Approaches/Activities. The overall structure is: Activities are a subset of Approaches, Approaches are a subset of Goals.


#### *Remap all the Activities:*

Please note that Approaches have changed significantly from Shield's original Tactics. With the addition of Goals, we 
made big changes that make a one-to-one mapping from Tactics to Approaches difficult. Adding Goals as a super category 
allowed us to make each Approach more focused. As a result, we were able to reduce much of the overlap seen in Shield. 
While we believe the pros outweigh the cons, we recognize that this makes the conversion from Tactic to Approach more 
challenging. In the end we believe the change will provide greater clarity and ease of understanding.

We provide three forms of translation tables or &quot;crosswalks&quot; from our previous release Technique IDs to the 
Engage Activity IDs to help with the transition. The three CSVs are:

1. Shield\_ID\_crossover.csv: a mapping of each Technique in Shield to its current state in Engage (Does not include Activities that are new to Engage)
2. Engage\_ID\_crossover.csv: a mapping of each Activity in Engage to its past state in Shield (Does not include Techniques that have been deprecated in Engage)
3. All\_crossover.csv: A mapping of each Technique and Activity with information about both Shield and Engage

We have also created a JSON representation of each CSV for greater machine readability:

- [CSV Files]({{ site.baseurl }}/assets/files/CSVs.zip)
- [JSON]({{ site.baseurl }}/assets/files/JSONs.zip)

We have identified the following 5 key types of changes when mapping Techniques to Activities:

1. Technique Became Activity
2. New Activity Added
3. Multiple Techniques Became Activity
4. Technique Name was Changed
5. Technique Name was Changed and Scope Broadened
6. Deprecated

Each of these types of changes is represented in the &quot;Change Type&quot; column of the CSVs or 
&quot;change-type&quot; field in the JSON. Some of these changes are simpler to implement than others. To help with the 
transition, we&#39;ve outlined six tips on how to move from Shield to Engage.

**Step 1: Start with the easy to remap activities first and automate.**  

For content mapped to Shield, start by replacing the existing technique ID from the value in the &quot;TID&quot; column 
with the value in the &quot;New ID&quot; column if there is one. Next, update the technique name to match the value in 
&quot;New Activity Name.&quot; This remap fixes the majority of the changes for Technique Became Activity, Technique 
Name was Changed, Technique Name was Changed and Scope was Broadened, as well as Multiple Techniques Became Activity. 
We&#39;ll handle the remaining two cases in Step 2. In cases where the scope of the Activity was broadened, it&#39;s 
also worth checking the &quot;Note&quot; field in the CSV and &quot;explanation&quot; in the JSON.

**_Technique Became Activity_** 

For Techniques labeled &quot;Technique Became Activity&quot; the name is the same in Engage as in it was in Shield but 
note that the definitions and IDs will be new. For example, Detonate Malware (Shield: DTE0018) remains Detonate Malware 
(Engage: EAC0013).

**_New Activity Added_** 

No mappings from previous Techniques will be impacted. Examples of new Activities include Information Manipulation 
(EAC0015) and Storyboarding (SAC0003).

**_Multiple Techniques Became New Activity_** 

For Techniques labeled &quot;Multiple Techniques Became New Activity,&quot; a new Activity was created covering the 
scope and content of multiple previous Techniques. For example, Decoy Account (Shield ID: DTE0010), Decoy Content 
(Shield ID: DTE0011), Decoy Credentials (Shield ID: DTE0012), Decoy Process (Shield ID: DTE0016), and Decoy Systems 
(Shield ID: DTE0017) merged into Decoy Artifacts and Systems (EAC0005).

**_Technique Name was Changed_** 

For Techniques labeled &quot;Technique Name was Changed,&quot; a new Activity was created covering the same scope and 
content of a previous Technique with a new name. For example, Decoy Persona (Shield ID: DTE0015) is now Personas 
(EAC0012).

**_Technique Name was Changed and Scope was Broadened_** 

For Techniques labeled &quot;Technique Name was Changed,&quot; a new Activity was created covering a larger scope and 
content from a previous Technique with a new name. For example, PCAP Collection (Shield ID: DTE0028) is a component of 
Network Monitoring (EAC0002).

**Step 2: Look at the deprecated Techniques to see what changed.** 

This is where some manual effort will be required. Deprecated techniques are not as straightforward. For techniques 
labeled as &quot;Deprecated,&quot; we removed them from Engage without replacing them because we felt they did not fit 
into Engage. Often, these activities focused more broadly on good cyber hygiene practices, which are no longer in scope 
for Engage. For example, User Training (Shield ID: DTE0035) was removed because we felt this practice was not within 
the tighter scope of denial, deception, and adversary engagement.

**Step 3: Review if the New Goals Categories Change Your Mappings.** 

If you want to take full advantage of Engage, it is important to consider each goal in the context of a given goal it 
is mapped to. The implementation behind a given activity is influenced greatly by the goal it is mapped to. For 
example, Decoy Artifacts and Systems maps to both Expose and Affect. A Decoy Artifact intended to expose the adversary 
may be an interesting document with a tripwire. On the other hand, a Decoy Artifact mean to Affect an adversary may be 
an interesting document that is so large the adversary wastes time attempting to encrypt and exfiltrate the artifact. 
In both cases, the Decoy Artifact is an interesting document in the environment, but the differing goals result in 
different implementations of the document (one document has a tripwire, one is massive in size). Make sure each of 
your existing mappings accurately reflects not only the Activity definition, but also the corresponding Approach and 
Goal definitions.

### Moving Forward

Although previous versions of Shield will remain [available on GitHub](https://github.com/MITRECND/mitrecnd.github.io) 
for the time being, new content will only be added to Engage. We look forward to exploring all the new opportunities 
these improvements provide. We would like to thank everyone that made these exciting changes possible, including the 
Engage and Shield Teams (past and present) and the amazing community for your continuous feedback and support.

<br/><br/>
_For those familiar with ATT&amp;CK, this guide attempts to mirror the 
[article](https://medium.com/mitre-attack/attack-with-sub-techniques-is-now-just-attack-8fc20997d8de) published to 
assist users in switching to ATT&amp;CK with Sub-Techniques._
