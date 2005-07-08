indexing
	component:   "openEHR Common Reference Model"
	description: "[
			     Interface to objects which are locatable - i.e. implement 
	             locator_id, and which can locate a sub-object from a path.
			     ]"
	keywords:    "locator, locatable"

	design:      "openEHR Common Reference Model 1.4.1"

	author:      "Thomas Beale"
	support:     "Ocean Informatics <support@OceanInformatics.biz>"
	copyright:   "Copyright (c) 2000-2004 The openEHR Foundation <http://www.openEHR.org>"
	license:     "See notice at bottom of class"

	file:        "$Source: C:/project/openehr/spec-dev/architecture/computable/eiffel/rm/common/archetyped/SCCS/s.feeder_audit.e $"
	revision:    "$Revision$"
	last_change: "$Date$"

class FEEDER_AUDIT

inherit
	TERMINOLOGY_SERVICE_ACCESS
		export 
			{NONE} all
		end

feature -- Initialisation
	
	make(a_system_id:STRING) is
		require
			a_system_id_exists: a_system_id /= Void and then not a_system_id.is_empty
		do
		end

feature -- Access

	system_id: STRING	
			-- Identity of the system where the item was originally committed.

	committer: STRING	
			-- Identity of party who committed the item.

	time_committed: DV_DATE_TIME	
			-- Time of committal of the item.
			
	change_type: DV_CODED_TEXT	
			-- Type of change, e.g. creation, correction, modification, synthesis etc. 
			-- Coded using the openEHR Terminology �audit change type� group.

	description: DV_TEXT	
			-- Description of change from original system.

invariant
	System_id_exists: system_id /= Void and then not system_id.is_empty
	Committer_valid: committer /= Void implies not committer.is_empty
	Change_type_valid: change_type /= Void and then 
		terminology("openehr").codes_for_group_name("audit change type", "en").has(change_type.defining_code)

end


--|
--| ***** BEGIN LICENSE BLOCK *****
--| Version: MPL 1.1/GPL 2.0/LGPL 2.1
--|
--| The contents of this file are subject to the Mozilla Public License Version
--| 1.1 (the 'License'); you may not use this file except in compliance with
--| the License. You may obtain a copy of the License at
--| http://www.mozilla.org/MPL/
--|
--| Software distributed under the License is distributed on an 'AS IS' basis,
--| WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
--| for the specific language governing rights and limitations under the
--| License.
--|
--| The Original Code is feeder_audit.e.
--|
--| The Initial Developer of the Original Code is Thomas Beale.
--| Portions created by the Initial Developer are Copyright (C) 2003-2004
--| the Initial Developer. All Rights Reserved.
--|
--| Contributor(s):
--|
--| Alternatively, the contents of this file may be used under the terms of
--| either the GNU General Public License Version 2 or later (the 'GPL'), or
--| the GNU Lesser General Public License Version 2.1 or later (the 'LGPL'),
--| in which case the provisions of the GPL or the LGPL are applicable instead
--| of those above. If you wish to allow use of your version of this file only
--| under the terms of either the GPL or the LGPL, and not to allow others to
--| use your version of this file under the terms of the MPL, indicate your
--| decision by deleting the provisions above and replace them with the notice
--| and other provisions required by the GPL or the LGPL. If you do not delete
--| the provisions above, a recipient may use your version of this file under
--| the terms of any one of the MPL, the GPL or the LGPL.
--|
--| ***** END LICENSE BLOCK *****
--|
