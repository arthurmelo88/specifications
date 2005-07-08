indexing
	component:   "openEHR Data Types Archetype Model"
	
	description: "Constrainer type for isntances of DV_PERIODIC_TIME_SPECIFICATION"
	keywords:    "PIVL, EIVL, periodic time specification"

	design:      "openEHR Data Types Archetype Model 0.4"

	author:      "Thomas Beale"
	support:     "Ocean Informatics <support@OceanInformatics.biz>"
	copyright:   "Copyright (c) 2000-2004 The openEHR Foundation <http://www.openEHR.org>"
	license:     "See notice at bottom of class"


	file:        "$Source: C:/project/openehr/spec-dev/architecture/computable/eiffel/am/data_types/time_specification/SCCS/s.c_dv_periodic_time_specification.e $"
	revision:    "$Revision: 1.1 $"
	last_change: "$Date: 03/11/14 14:08:10+00:00 $"

class C_DV_PERIODIC_TIME_SPECIFICATION

inherit
	C_DV_TIME_SPECIFICATION

create
	make, make_from_display_string, make_from_canonical_string

feature -- Initialization
	
	make_from_display_string(str:STRING) is
		do
			-- TO_BE_IMPLEM
		end

	make_from_canonical_string(str:STRING) is
		do
			-- TO_BE_IMPLEM
		end
		
	make(str:STRING) is
			-- make from a single string
		do
			-- TO_BE_IMPLEM
		end

feature -- Access

	default_value: DV_PERIODIC_TIME_SPECIFICATION is
			-- 
		do
			
		end
		
feature -- Status Report

	valid_value (a_value: DV_PERIODIC_TIME_SPECIFICATION): BOOLEAN is 
		do
		end

	
feature -- Output

	as_display_string: STRING is
			-- string form displayable for humans
		do
		end
	
	as_canonical_string: STRING is
			-- standardised form of string guaranteed to contain all information
			-- in data item
		do
		end
		
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
--| The Original Code is c_dv_periodic_time_specification.e.
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
